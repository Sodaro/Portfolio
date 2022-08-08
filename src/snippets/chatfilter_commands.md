```lua
SLASH_SCF1 = "/SCF"
local function MyCommands(msg, editbox)
  local case, text = strsplit(" ", msg, 2)
  if case == "add" then
    for word in text:gmatch("%S+") do
      if word:find("_") then
        word = gsub(word, "_", " ")
      end
      if not Set.Contains(filters, word) then
        word = string.lower(word)
        Set.Add(filters, word)
        print("SCF Added: " .. word)
      end
    end
  elseif case == "remove" then
    for word in text:gmatch("%S+") do
      if word:find("_") then
        word = gsub(word, "_", " ")
      end
      if Set.Contains(filters, word) then
        word = string.lower(word)
        Set.Remove(filters, word)
        print("SCF Removed: " .. word)
      end
    end
  elseif case == "debug" then
    debugEnabled = not debugEnabled
    local val = debugEnabled and "ON" or "OFF"
    print("SCF debugging toggled", val)
  elseif case == "clear" then
    for filter, v in pairs(filters) do
      Set.Remove(filters, filter)
    end
    print("SCF Cleared")
  elseif case == "print" then
    PrintFilters()
  else
    print("SCF: Unknown parameter. Valid parameters: add x, remove x, clear, debug")
  end
end

SlashCmdList["SCF"] = MyCommands
```