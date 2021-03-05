// import { useEffect, useRef, useContext, useState } from "react";
// import { FilterContext } from "../filter/filterContext";
// import { IFilterValue } from "../models/filter.model";
// import layoutContext from '../layout/layoutContext';
// import useFetch from "use-http";

// export const useMountEffect = (fun: any) => useEffect(fun, []);

// export function usePrevious(value: any) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);
//   return ref.current;
// }

// export const useCustomFetch = (url?: string, cacheKey?: string) => {
//   const cacheData = useRef<any>({});
//   const fetch = useFetch(url);
//   const layout = useContext(layoutContext.context);

//   useEffect(() => fetch.error && layout.setShowServerError(true), [fetch.error]);
//   useEffect(() => {
//     if (!fetch.data && !cacheKey) return;
//     const key: any = cacheKey ? cacheKey : 'key';
//     cacheData.current[key] = fetch.data;
//   }, [fetch.data]);
//   return { ...fetch, cacheData: cacheKey ? cacheData.current[cacheKey] : false};
// };

// export const useFilterPartial = (type: string, applied?: boolean) => {
//   const { filterObjects, appliedFilterObjects } = useContext(FilterContext);
//   const prev: any = usePrevious({filterObjects, appliedFilterObjects});
//   const [filterPartial, setFilterPartial] = useState<IFilterValue[]>([]);

//   const checkTwoArrays = (A: string[], B: string[]): boolean => {
//     if (A.length === 0 && B.length === 0) return false;
//     if (A.length !== B.length) return true;
//     return !(A.every(a => B.indexOf(a) !== -1));
//   }

//   useEffect(() => {
//     const targetFilterObjects = applied ? appliedFilterObjects : filterObjects;
//     const targetPrevFilterObjects = prev ? (applied ? prev.appliedFilterObjects : prev.filterObjects) : [];
//     const filterIds = targetFilterObjects.filter(x => x.type === type).map(x => x.id);
//     const prevFiltersIds = targetPrevFilterObjects.filter((x: any) => x.type === type).map((x: any) => x.id);
//     if (checkTwoArrays(filterIds, prevFiltersIds)) {
//       setFilterPartial(targetFilterObjects.filter(x => x.type === type));
//     }
//   }, [filterObjects, appliedFilterObjects]);

//   return filterPartial;
// }

import { useEffect, useRef, useContext, useState } from "react";
import useFetch from "use-http";
import {
    createDispatchHook
} from 'react-redux';

export const useLayoutDispatch = createDispatchHook()



export const usePrevious = (value, defaultVal) => {
  const ref = useRef(defaultVal);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export const useCustomFetch = (url) => {
  const fetch = useFetch(url);
  const layoutDispatch = useCustomLayoutDispatch();
  useEffect(() => {
    if (fetch.error) console.log(fetch.error)
  }, [fetch.error]);
  return { ...fetch };
};
export const useCustomLayoutDispatch = () => {
    const layoutDispatch = useLayoutDispatch();
    return (data) => {
      layoutDispatch({ type: 'add', payload: data });
    }
  }



