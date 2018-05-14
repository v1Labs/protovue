# Protovue

> A prototyping component library build for Vue.js

<p align="center">
  <img alt="Protovue" src="https://v1labs.github.io/protovue/assets/icon-green.png?raw=true" width="225" />
</p>

## Components

### Grid

```javascript
<v1-grid />
<v1-grid size="8x8" /> // Default: 12x10
<v1-grid gap="0" /> // Default: 10
<v1-grid guides /> // Shows guides to help build cells
```

### Cell

```javascript
<v1-cell />
<v1-cell size="2x4" /> // WxH: size="2,4" and size="2 4" also work
<v1-cell x="1" /> // Default: 0
<v1-cell y="3" /> // Default: 0
<v1-cell middle /> // Vertically aligns content in middle
<v1-cell bottom /> // Vertically aligns content in bottom
```

### Text

```javascript
<v1-text />
<v1-text rows="5" /> // Default: 3
```
<img alt="Text" src="https://v1labs.github.io/protovue/assets/text.png?raw=true" />

### Image

```javascript
<v1-image />
<v1-image width="100px" /> // Default: 100%
<v1-image height="100px" /> // Default: 200px
<v1-image round /> // Makes circle if width equals height
<v1-image center /> // Centers horizontally
```
<img alt="Image" src="https://v1labs.github.io/protovue/assets/image.png?raw=true" />

### Avatar

```javascript
<v1-avatar />
<v1-footer count="5" /> // Default: 1
```
<img alt="Avatar" src="https://v1labs.github.io/protovue/assets/avatar.png?raw=true" />

### Nav

> Works best in a vertically narrow cell

```javascript
<v1-nav />
<v1-nav links="5" /> // Default: 4
```
<img alt="Nav" src="https://v1labs.github.io/protovue/assets/nav.png?raw=true" />

### Footer

> Works best in a vertically narrow cell

```javascript
<v1-footer />
<v1-footer links="5" /> // Default: 4
```
<img alt="Footer" src="https://v1labs.github.io/protovue/assets/footer.png?raw=true" />
