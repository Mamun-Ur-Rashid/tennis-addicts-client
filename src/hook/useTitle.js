import { useEffect } from "react"

const useTitle = (title) => {
    useEffect( () => {
        document.title = `${title} - Tennis Addicts`;
    },[title])
}
export default useTitle;