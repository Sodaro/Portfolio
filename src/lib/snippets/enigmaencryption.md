```cpp
int32 AEnigmaMachine::EncodeLetter(int32 AlphabetIndex)
{
	/*
	* ENCRYPTION LOGIC
	* 1. Rotate first wheel every time a key is pressed.
	* 2. Go through plugboard (Check if the letter port is connected to another port if so replace letter)
	* 3. Encrypt the input based on each wheel's configs.
	* 4. Get the connected letter in the reflector.
	* 5. Reverse through the wheels. 
		(different encryption to simulate the electric signal going the opposite way)
	* 6. Go through plugboard again
	* 7. Turn on the lamp matching the encrypted key, and output it to the onscreen textwidget.
	*/

	RotorWheels[0]->Rotate();

	FString Key = "";
	Key.AppendChar((TCHAR)(AlphabetIndex + 'A'));
	TWeakObjectPtr<AMachinePort> Port = LetterComponents[Key].Port->GetSwappedPort();
	if (Port != nullptr)
	{
		AlphabetIndex = Port->GetLetterIndex();
	}

	TCHAR Letter;

	for (int i = 0; i < 3; i++)
	{
		AlphabetIndex = RotorWheels[i]->Encode(AlphabetIndex, false);
		Letter = (TCHAR)(AlphabetIndex + 'A');
	}

	AlphabetIndex = ReflectorWheel->Encode(AlphabetIndex, false);
	Letter = (TCHAR)(AlphabetIndex + 'A');

	for (int i = 2; i >= 0; i--)
	{
		AlphabetIndex = RotorWheels[i]->Encode(AlphabetIndex, true);
		Letter = (TCHAR)(AlphabetIndex + 'A');
	}
	Key = "";
	Key.AppendChar(Letter);
	Port = LetterComponents[Key].Port->GetSwappedPort();
	if (Port != nullptr)
	{
		AlphabetIndex = Port->GetLetterIndex();
		Letter = (TCHAR)(AlphabetIndex + 'A');
	}
	
	if (LastLampKey != "")
	{
		LetterComponents[LastLampKey].Lamp->TurnOff();
	}

	LastLampKey.Reset();
	LastLampKey = LastLampKey.AppendChar(Letter);
	LetterComponents[LastLampKey].Lamp->TurnOn();

	FString ReadableText = "";
	OutputText += Letter;
	ReadableText += OutputText[0];
	
	for (int i = 1; i < OutputText.Len(); i++)
	{
		if (i % 5 == 0)
			ReadableText += " ";

		ReadableText += OutputText[i];
	}

	OutputWidget->SetText(ReadableText);
}

```