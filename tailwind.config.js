const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
    theme: {
        screens: {
            md: '768px',
        },
        borderColor:{
            blue: {
                400: '#63b3ed',
            },
        },
        height: {
            'auto': 'auto',
            'full': '100%',
        },
        fontSize: {
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
        },
        fontWeight: {
            'light': 300,
            'medium': 500,
            'bold': 700,
        },
        letterSpacing: {
            'wider': '.05em',
            'widest': '.25em',
        },
        lineHeight: {
            relaxed: 1.75,
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            gray: {
                400: '#cbd5e0',
                500: '#a0aec0',
            },
            red: {
                600: '#e53e3e',
            },
            blue: {
                600: '#3182ce',
            },
            green: {
                600: '#38a169',
            },
            purple: {
                500: '#9f7aea',
            },
        },
        spacing: {
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '8': '2rem',
            '12': '3rem',
        },
        margin: {
            '0': '0',
            '1': '0.25rem',
            '3': '0.75rem',
            '4': '1rem',
            '-8': '-2rem',
            '12': '3rem',
            'auto': 'auto',
        },
        borderRadius: {
            'sm': '.125rem',
            'full': '9999px',
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
        },
    },
    variants: {
        borderColor: ['hover'],
        textColor: [],
    },
    corePlugins: {
        listStyleType: false,
        rotate:false,
        table:false,
        opacity: false,
        cursor: false,
        zIndex: false,
        stroke: false,
        minWidth: false,
        maxWidth: false,
        minHeight: false,
        maxHeight: false,
        flexShrink: false,
        fill: false,
        boxShadow: false,
        backgroundSize: false,
        backgroundPosition: false,
        container: false,
        objectPosition: false,
        overflow: false,
        visibility: false,
        fontSmoothing: false,
        fontStyle: false,
        listStyleType: false,
        listStylePosition: false,
        placeholderColor: false,
        whitespace: false,
        backgroundAttachment: false,
        backgroundRepeat: false,
        flexDirection: false,
        alignItems: false,
        alignContent: false,
        alignSelf: false,
        order: false,
        borderCollapse: false,
        tableLayout: false,
        boxShadow: false,
        appearance: false,
        outline: false,
        pointerEvents: false,
        resize: false,
        userSelect: false,
        accessibility: false,
    }
}