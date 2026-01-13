-- Basic settings
vim.opt.showmatch = true         -- show matching brackets
vim.opt.ignorecase = true        -- case insensitive search
vim.opt.mouse = "a"              -- enable mouse everywhere (combines mouse=v and mouse=a)
vim.opt.hlsearch = true          -- highlight search results
vim.opt.incsearch = true         -- incremental search
vim.opt.tabstop = 4              -- tab width
vim.opt.softtabstop = 4          -- backspace treats 4 spaces as tab
vim.opt.expandtab = false        -- keep tabs as tabs
vim.opt.shiftwidth = 4           -- autoindent width
vim.opt.autoindent = true        -- copy indent from previous line
vim.opt.number = true            -- line numbers
vim.opt.wildmode = "longest,list" -- bash-like tab completion
vim.opt.colorcolumn = "80"       -- 80-column ruler
vim.opt.cursorline = true        -- highlight current line

-- Clipboard (may require xclip or similar on Linux)
vim.opt.clipboard = "unnamedplus"

-- Filetype and syntax (Neovim defaults these to on)
vim.cmd("filetype plugin indent on")
vim.cmd("syntax on")

-- Optional: faster scrolling (usually not needed in modern Neovim)
-- vim.opt.ttyfast = true

