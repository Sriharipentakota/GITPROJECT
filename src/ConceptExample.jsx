import React from "react";

/**
 * Dynamically render the example component.
 * Each concept's 'example' property is a React component.
 */
export default function ConceptExample({ example: ExampleComponent }) {
    return (
        ExampleComponent ? <ExampleComponent /> : <div>No example.</div>
    )
}