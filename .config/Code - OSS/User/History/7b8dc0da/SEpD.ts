import { clerkMiddleware, createRouteMatcher, getAuth } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/webhooks/(.*)",
]);

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};

export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
        await auth.protect();
    }

    // Add custom header for API routes
    if (request.url.startsWith("/api")) {
        const { userId, isAuthenticated } = getAuth(request);

        isAuthenticated ? null : NextResponse.rewrite("/sign-in");

        if (!userId) {
            const url = request.nextUrl.clone();
            url.pathname = "/api/401"; // Redirect to 401 page if not authenticated
            return NextResponse.rewrite(url);
        }

        // Attach the user ID to the headers
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-clerk-user-id", userId);

        // Continue with added header
        return NextResponse.next({
            request: { headers: requestHeaders },
        });
    }

    return NextResponse.next(); // Allow the request to proceed if public or other routes
});
