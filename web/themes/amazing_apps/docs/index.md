# Apps UI pattern library.

## Pattern types

### Base `/components/01-base`
* Styling for existing HTML elements.
* No CSS classes
* Never used directly, only as a showcase.

### Atoms `/components/02-atoms`
* Smallest building block.
* Never include anything themselves.
* Don't have data requirements.

### Molecules `/components/03-molecules`
* Composed of multiple atoms or molecules.
* Can have data requirements (GraphQL fragments)

### Organisms `/components/04-organisms`
* Top level page components.
* Not reused within each other.
* Can have data requirements (GraphQL fragments)

### Layouts `/components/05-layouts`
* Never have data requirements.
* Expose overridable blocks.

### Pages `/components/06-pages`
* Never included, only showcase full page builds.

