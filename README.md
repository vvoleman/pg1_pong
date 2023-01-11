# THREE.js PONG

- Předmět: `PG1`

## Jak spustit?
- Stačí spustit soubor `dist/index.html` v prohlížeči.

## Struktura

- Pro vypracování semestrální jsem použil TypeScript - typování pomáhá při tvorbě projektu.
- Všechny soubory jsou v adresáři `src`. V adresáři `dist` zkompilované soubory, které lze spustit v prohlížeči.
- Vstupem aplikace je `main.ts`, který obsluhuje UI (stránku) a spouští novou hru.

### Hra
- Třída `game/Game.ts` obsahuje základní prvky hry
	- připraví obrazovku (třída `game/Screen.ts` se stará o scene, renderer a
	  kameru)
	- připraví třídu `game/Borders.ts` (ta se stará o zjištění kolizí s hranicí herní plochy)
		- Používá metodu `containsBox`
	- míček (jen ho přidá)
- Do třídy `Game` vstupuje gamemode - ten řídí logiku hry. Základním gamemodem je NormalGameMode, který už obsahuje
  nastavení ovládání hracích pádel a poslouchá na eventy od jiných komponent - ty dědí `objects/base/Observable.ts`.

### Herní objekty
- THREE.js objekty jsou zapouzdřené ve třídách, které implementují rozhraní `objects/base/IObject.ts`. Ta předepisuje:
	- `getObject()` pro získání Mesh objektu
	- `get/setPosition()` pro nastavení pozice objektu
		- Pozice je objekt `containers/PositionVector` (defakto `Vector3`, ale chtěl jsem mezi nima mít trochu rozdíl)
	- `get/setVelocity()` pro nastavení rychlosti
		- Také jako Vector3
	- `update()` pro provedení změn při překreslení - např. posunutí objektu o jeho rychlost (position + velocity)

### Kolize
- Dalším důležitým managerem je `managers/Collion.ts`, který umožňuje definovat pár objektů a callback, který se zavolá
  po jejich kolizi
	- využívá metodu `intersectsBox`
	- Obsahuje metodu `update()`, ve které se provádí kontrola kolizí párů
- Herní hranice se řeší v `game/Borders.ts`. Obsahuje metodu `getObject()`, která vrací BoxHelper. Ten je použit pro
  zjištění kolizí s hranicemi herní plochy.
	- Využívá metodu `intersectsBox`

### Ovládání
- Měl jsem v plánu udělat nastavení ovládání v UI, ale nakonec nezbyl čas. Velká část toho je ale připravená.
	- V rámci Game/GameModu se akce definují přes název (LEFT_PLAYER_UP). Ten se registruje
	  do `managers/ControlsManager.ts`, který slouží jako abstrakce nad `KeyPressManagerem`. Pokud by se tedy do
	  ControlsManageru přidala metoda `update(name, key)`, tak by se dalo změnit ovládání v runtime.

Vypracoval Vojtěch Voleman &copy; 2022-23