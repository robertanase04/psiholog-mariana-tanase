/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        'heading': ['"Playfair Display"', 'serif'],
                        'body': ['Manrope', 'sans-serif'],
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        olive: {
                                50: '#F4F6F2',
                                100: '#E6EADF',
                                200: '#CCD6C0',
                                300: '#B0C09F',
                                400: '#92AB7F',
                                500: '#5F6F52',
                                600: '#4A5840',
                                700: '#36412E',
                                800: '#252C1F',
                                900: '#151911'
                        },
                        brick: {
                                50: '#FDF6F5',
                                100: '#FAEDEB',
                                200: '#F5D1CC',
                                300: '#EEB4AD',
                                400: '#E48B80',
                                500: '#A04030',
                                600: '#853528',
                                700: '#6A2B20',
                                800: '#502018',
                                900: '#351510'
                        },
                        beige: {
                                50: '#FDFCFA',
                                100: '#F9F7F2',
                                200: '#F0EFE9',
                                300: '#E6E4DC',
                                400: '#D9D6CC',
                                500: '#CFCBC0',
                                600: '#A6A29A',
                                700: '#7D7A73',
                                800: '#53514D',
                                900: '#2A2926'
                        },
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'fade-in-up': {
                                '0%': { opacity: '0', transform: 'translateY(20px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        'fade-in': {
                                '0%': { opacity: '0' },
                                '100%': { opacity: '1' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                        'fade-in': 'fade-in 0.6s ease-out forwards'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
