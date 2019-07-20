exports.AllTags = reverse({
    javascript: {
        background: 'var(--text-color--dark)',
        color: '#f0db4f',
        description: `JavaScript (JS) is a lightweight interpreted or just-in-time compiled programming language.`
    },
    typescript: {
        background: 'var(--text-color--dark)',
        color: '#2775c3',
        description: `TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript.`
    },
    nodejs: {
        background: 'var(--text-color--dark)',
        color: '#90c53f',
        description: `Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser.`
    },
    structures: {
        background: '#ffffff',
        color: '#ff5252',
        description: `Data structures used in the API.`
    },
    references: {
        background: '#ffffff',
        color: '#3880ff',
        description: `API Reference Overview for Quark API.`
    },
    api: {
        background: '#ffffff',
        color: '#6675e0',
        description: `Quark API is a set of JavaScript APIs that you can invoke in your sketches.`
    },
    guide: {
        background: '#ffffff',
        color: '#a481d5',
        description: `Outline. Download and install Quark. See an overview of the user interface.`
    },
    faq: {
        background: '#ffffff',
        color: '#6675e0',
        description: `A common questions section as needed for specific topics. We've captured items here that don't fit in the other topics.`
    },
    arduino: {
        background: '#00979d',
        color: '#ffffff',
        description: `Arduino is an open-source hardware and software company, project and user community that designs and manufactures single-board microcontrollers.`
    }
});

function reverse(tags) {
    // Object.keys(tags).map((tag) => {
    //     const background = tags[tag].background;
    //     const color = tags[tag].color;

    //     tags[tag].background = color;
    //     tags[tag].color = background;
    // });

    for (let tag in tags) {
        const background = tags[tag].background;
        const color = tags[tag].color;

        tags[tag].background = color;
        tags[tag].color = background;
    }
    return tags;
}