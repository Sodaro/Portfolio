---
title: Enigma Machine
date: "2021-12-14"
---

**Engima Machine**
<img src="/enigmamachine.png" width="200" height="100">

![Alt Text](/enigmamachine.png "Title")


```cpp

UENUM(BlueprintType)
enum RingPosition
{
	LEFT UMETA(DisplayName = "LEFT"),
	MID UMETA(DisplayName = "MID"),
	RIGHT UMETA(DisplayName = "RIGHT")
};

USTRUCT()
struct FLetterComponents
{
	GENERATED_BODY()

	UPROPERTY(EditInstanceOnly)
	AMachineLamp* Lamp;
	UPROPERTY(EditInstanceOnly)
	AMachineKey* Key;
	UPROPERTY(EditInstanceOnly)
	AMachinePort* Port;
};

UCLASS()
class ENIGMATURING_API AEnigmaMachine : public AActor
{
	GENERATED_BODY()
	
public:

	void BeginPlay() override;

	UPROPERTY(EditInstanceOnly)
	TArray<ARotorWheel*> RotorWheels;

	UPROPERTY(EditInstanceOnly)
	ARotorWheel* ReflectorWheel;

	UPROPERTY(EditInstanceOnly)
	TMap<FString, FLetterComponents> LetterComponents;

	FString LastLampKey = "";

	FString OutputText = "";

	UPROPERTY(EditInstanceOnly)
	TSubclassOf<UMachineTextOutput> OutputWidgetClass;

	UMachineTextOutput* OutputWidget;

	void PressKey(int32 AlphabetIndex);
	int32 EncodeLetter(int32 AlphabetIndex);
};
```