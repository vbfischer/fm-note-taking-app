export { auth as middleware } from "@/auth";

export const config = {
    matcher: ["/notes"],
    unstable_allowDynamic: [
        "**/node_modules/lodash/**/*.js",
        "**/node_modules/lodash/*.js"
    ]
}
