import '../../App.css';
import Search from '../search/Search';
import React, {useState, useEffect} from "react";
import { useInfiniteQuery } from 'react-query';
import PhotosAPI from '../api/PhotosApi';
import PhotosList from "../photosList/PhotosList";
import Preloader from '../preloader/Preloader';


const MainContent = () => {
  const [searchVal, setSearchVal] = useState('random');

  const fetchPhotosList = async (value, page) => {
    const { data: { results } } = await PhotosAPI.getPhotosList(value, page);
    return results;
  };

  const {
    data: photosListData,
    isSuccess: isSuccessPhotosListFetch,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(['projects', searchVal], ({ pageParam = 1 }) => fetchPhotosList(searchVal, pageParam), {
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const handleScroll = () => {
    if (window.innerHeight
        + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      fetchNextPage();
    }
  };
  window.addEventListener('scroll', handleScroll);

  const childToParent = (childdata) => {
    setSearchVal(childdata);
  }

  return (
    <>
    <div className="App">
        <Search childToParent={childToParent}/>
        {!!isSuccessPhotosListFetch
          && <PhotosList AllPhotos={photosListData.pages.flat()} />}
        {!!isLoading && <Preloader />}
    </div>
    </>
  );
}

export default MainContent;
