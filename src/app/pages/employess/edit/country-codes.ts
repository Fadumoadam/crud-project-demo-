export interface CountryCodes {
    code: string;
    country: string;
}

// https://github.com/google/libphonenumber/blob/master/FAQ.md#why-are-bouvet-island-bv-pitcairn-island-pn-antarctica-aq-etc-not-supported
export const ISO_3166_1_CODES: CountryCodes[] = [
    {code: 'SA', country: 'Saudi Arabia'},
    {code: 'AE', country: 'United Arab Emirates'},
    {code: 'GB', country: 'United Kingdom of Great Britain and Northern Ireland'},
    {code: 'US', country: 'United States of America'},
];