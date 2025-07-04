"use client";
import { RecoilRoot } from "recoil";
import LenisScroll from "../LenisScroll/lenisScroll";


const EmptyLenis = ({children}) => {
  return children
}
// typeof navigator === 'undefined'? false:  navigator?.platform?.indexOf('Mac') > -1 === false ? true: false
const enableLenis = typeof navigator === 'undefined' ? false : navigator?.platform?.indexOf('Mac') > -1 === false ? true : false
//const enableLenis = false
const LenisComponent = enableLenis ? LenisScroll : EmptyLenis


const GlobalProviders = ({ children }) => {

  return (
    <LenisComponent>
      <RecoilRoot>{children}</RecoilRoot>
    </LenisComponent>
  );
};

export default GlobalProviders;