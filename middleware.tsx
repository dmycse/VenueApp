import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware();

// const isProtectedRoute = createRouteMatcher([
//   '/dashboard(.*)',
//   '/forum(.*)',
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (!auth().userId && isProtectedRoute(req)) {

//     // Add custom logic to run before redirecting

//     return auth().redirectToSignIn();
//   }
// });

// const isPublicRoute = createRouteMatcher([
//   '/', '/events/:id', '/api/hooks/clerk', '/api/hook/stripe', 'api/uploadthing']);

// export default clerkMiddleware((auth, request) => {
//   if(!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

// const isProtectedRoute = createRouteMatcher(['/api/webhooks(.*)'])

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect()
// })

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

}