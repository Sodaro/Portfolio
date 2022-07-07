```lua
SLASH_SCF1 = "/SCF"
local function MyCommands(msg, editbox)
    local case, text = strsplit(" ", msg, 2)
    if case == "add" then
        for word in text:gmatch("%S+") do
            if word:find("_") then
              word = gsub(word, "_", " ")
            end
            if not setContains(filters, word) then
                word = string.lower(word)
                addToSet(filters, word)
                print("SCF Added: "..word)
            end
        end
    elseif case == "remove" then
        for word in text:gmatch("%S+") do
            if word:find("_") then
              word = gsub(word, "_", " ")
            end
            if setContains(filters, word) then
                word = string.lower(word)
                removeFromSet(filters, word)
                print("SCF Removed: "..word)
            end
        end
    elseif case == "clear" then
        for filter,v in pairs(filters) do
            removeFromSet(filters, filter)
        end
        print("SCF Cleared")
    elseif case == "print" then
        PrintFilters()
    else
        print("SCF: Unknown parameter. Valid parameters: add x, remove x, clear")
    end
end
```