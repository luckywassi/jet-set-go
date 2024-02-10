import { useEffect } from 'react'
import { useStore } from '../contexts/store/store';

const useAppInitialization = () => {

  useEffect(() => {

    const links = document.getElementById("nav-links");

    // ********** smooth scroll ************
    // select links
    const scrollLinks = document.querySelectorAll(".scroll-link");

    scrollLinks.forEach(link => {
      link.addEventListener("click", e => {
        // prevent default
        e.preventDefault();
        links?.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(2);
        const element = document.getElementById(id);
        //
        let position = element?.offsetTop - 62;
        window.scrollTo({
          left: 0,
          // top: element.offsetTop,
          top: position,
          behavior: "smooth"
        });
      });
    });

  }, []);

  const { store } = useStore();

  return {
    data: {
      loading: store.loading
    }
  }
}

export default useAppInitialization