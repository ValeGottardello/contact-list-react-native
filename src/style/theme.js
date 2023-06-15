import { Platform } from 'react-native'

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#1b263b',
        secondary: '#778da9',
        tertiary: '#e5e5e5'
    },
    fontSizes: {
        body: 14,
        subheading: 20,
    },
    fonts: {
        main: 'System',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    textAlign: {
        center: 'center',
        left: 'left',
        right: 'right'
    },
    language: {
        backgroundColor: Platform.select({
            ios:  '#e5e5e5',
            android: '#e5e5e5',
            default: '#778da9',
        })
    },
    detailsWrapper: {
        marginTop: 30,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsLabel: {
        color: '#24292e',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
    },
    detailsText: {
        textAlign: 'center',
        color: '#586069',
        fontSize: 16,
        paddingTop: 5,
    },
    detailsCointainer : {
        borderBottomWidth: 2,
        borderBottomColor: '#778da9',
        padding: 20,
    }
}

export default theme