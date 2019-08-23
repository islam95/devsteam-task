const clientId = "649_4fe5pku1p0o4so444skg8oswkkwg8wgk00c8sw0skw44k8ocwo";
const clientSecret = "5vpzlxebmeww0sowc04wo4o0w8084kcwww0g4wsc0084c084o8";
const grantType = "client_credentials";

export const baseURL = `https://e.land.gov.ua/oauth/v2/token?grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}`;
export const apiBaseURL = "https://e.land.gov.ua/api";
