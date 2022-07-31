```lua
local function myChatFilter(self, event, msg, author, ...)
    local authorName, realm = strsplit("-", author, 2)
    msg = removeIcons(msg) --remove all potential raid icons; such as skull, star, diamond etc
    if authorName == playerName then
      return false, msg, author, ... --do nothing
    end
    loweredmsg = string.lower(msg)
    for filter,_ in pairs(filters) do
        local startPos, endPos = string.find(loweredmsg, filter)
        if endPos ~= nil then --there is a match
            if endPos+1 <= #loweredmsg then --the endpos is not the last character 
                local followingChar = string.sub(loweredmsg, endPos+1, endPos+1)
                if string.match(followingChar, "[^a-zA-Z%d]") then --following char is whitespace or non-alphanumeric, filter the message
                    return true
                end
            else
                return true --endpos was last character, filter message
            end
        end
    end
    return false, msg, author, ... --no match found, do nothing
end


function removeIcons(msg)
  msg = msg:gsub("{%a+%d+}", "");
  msg = msg:gsub("{%a+}", "");
  return msg
end

ChatFrame_AddMessageEventFilter("CHAT_MSG_CHANNEL", myChatFilter)
```