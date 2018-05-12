# Protovue

> A prototyping component library build for Vue.js

<p align="center">
  <img alt="Protovue" src="static/images/icon-green.png?raw=true" width="400" />
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

### Image

```javascript
<v1-image />
<v1-image width="100px" /> // Default: 100%
<v1-image height="100px" /> // Default: 200px
<v1-image round /> // Makes circle if width equals height
<v1-image center /> // Centers horizontally
```

### Avatar

```javascript
<v1-avatar />
<v1-footer count="5" /> // Default: 1
```

### Nav

> Works best in a vertically narrow cell

```javascript
<v1-nav />
<v1-nav links="5" /> // Default: 4
```

### Footer

> Works best in a vertically narrow cell

```javascript
<v1-footer />
<v1-footer links="5" /> // Default: 4
```
