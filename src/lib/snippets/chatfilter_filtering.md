```lua
local function RemoveIcons(msg)
  msg = msg:gsub("{%a+%d+}", "");
  msg = msg:gsub("{%a+}", "");
  return msg
end

local function PrintFilteredMessage(msg)
  print("|cFFFFFF00", "[SCF] message filtered:", msg, "|r")
end

local function MyChatFilter(self, event, msg, author, ...)
  local authorName, realm = strsplit("-", author, 2)
  local _, _, _, _, _, _, _, _, lineID, _ = ...

  if authorName == playerName then
    return false, msg, author, ... --do not filter player, return early
  end

  local shouldFilter = false
  msg = RemoveIcons(msg)
  loweredMsg = string.lower(msg)

  for filter, _ in pairs(filters) do
    local startPos, endPos = string.find(loweredMsg, filter)
    if endPos ~= nil then --there is a match
      if endPos + 1 > #loweredMsg then --the text is longer than full message
        shouldFilter = true
        break
      end
      local followingChar = string.sub(loweredMsg, endPos + 1, endPos + 1)
      if string.match(followingChar, "[^a-zA-Z%d]") then --following char is whitespace or non-alphanumeric, filter the message
        shouldFilter = true
        break
      end
    end
  end

  if shouldFilter then
    if debugEnabled and lineID ~= lastLineID then
      PrintFilteredMessage(msg)
    end
  end

  lastLineID = lineID

  return shouldFilter, msg, author, ... --if shouldfilter is true the message is filtered out
end

ChatFrame_AddMessageEventFilter("CHAT_MSG_CHANNEL", MyChatFilter)
```