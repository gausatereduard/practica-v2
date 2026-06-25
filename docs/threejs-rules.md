# Three.js Rules

## Rendering

Prefer:

- React Three Fiber
- Drei helpers

Avoid:

- direct scene mutations

---

## Performance

Use:

- useMemo
- instancing
- texture compression

Avoid:

- creating geometries every render
- creating materials every render

---

## Assets

Store:

public/models
public/textures

Prefer:

- glTF
- Draco compression

---

## Animation

Prefer:

- useFrame only when necessary
- spring animations when suitable

Avoid:

- frame-loop heavy logic

---

## Shaders

Shaders belong in:

three/shaders/

Keep:

- uniforms typed
- reusable shader modules