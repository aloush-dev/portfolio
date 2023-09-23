// import { FunctionComponent, Suspense, lazy } from "react";

// type IconLoaderProps = {
//   icon: string;
// };

// export const IconLoader: FunctionComponent<IconLoaderProps> = ({ icon }) => {
//   const DynamicComponent = lazy(() => import(`react-icons/si/${icon}`));

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <DynamicComponent />
//     </Suspense>
//   );
// };
