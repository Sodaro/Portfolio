```cpp
NewAlphabetIndex = 0;
InputLetter = Alphabet[Input];
if (reverse == false)
{
	Index = Input + CurrentRotationOffset - RingSettingOffset;
	Wrap(Index, 0, 26);
	CipherLetter = CipherArr[Index];
	NewAlphabetIndex = CipherLetter - 'A' - CurrentRotationOffset + RingSettingOffset;
	Wrap(NewAlphabetIndex, 0, 26);
}
else if (reverse == true)
{
	Index = Input + CurrentRotationOffset - RingSettingOffset;
	Wrap(Index, 0, 26);
	for (int i = 0; i < 26; i++)
	{
		if (CipherArr[i] - 'A' == Index)
		{
			NewAlphabetIndex = i - CurrentRotationOffset + RingSettingOffset;
			Wrap(NewAlphabetIndex, 0, 26);
			break;
		}
	}
}
return NewAlphabetIndex;
```