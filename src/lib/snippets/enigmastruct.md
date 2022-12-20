```cpp
USTRUCT()
struct FEnigmaComponents
{
	GENERATED_BODY()

	UPROPERTY(EditInstanceOnly)
	AMachineLamp* Lamp;
	UPROPERTY(EditInstanceOnly)
	AMachineKey* Key;
	UPROPERTY(EditInstanceOnly)
	AMachinePort* Port;
};
```