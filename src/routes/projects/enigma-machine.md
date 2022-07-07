---
title: Enigma Machine
date: "2022-07-03"
---

<script>
	import Collapse from "$components/Collapse.svelte";
    import CoolCode from "$snippets/coolcode.md"
</script>

[**Back to frontpage**](..)
<br>

# Enigma Machine Project

<img src="/projectmedia/enigmamachine.png" width="200" height="100">
<br>

![Alt Text](/projectmedia/enigmamachine.png "Title")

<Collapse title="longcode.cpp">
<CoolCode />
</Collapse>

<Collapse title="shortcode.cpp">

```cpp
UENUM(BlueprintType)
enum RingPosition
{
	LEFT UMETA(DisplayName = "LEFT"),
	MID UMETA(DisplayName = "MID"),
	RIGHT UMETA(DisplayName = "RIGHT")
};
```
</Collapse>