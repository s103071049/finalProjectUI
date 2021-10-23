import { useState, useEffect, useRef, useContext } from "react";
import { getAllProducts } from "../../WEBAPI";
import { useHistory } from "react-router-dom";
import usePagination from "../paginationHooks/usePagination";
import { AuthLoadingContext } from '../../context'

const useFindProducts = (selectedCategory) => {
  const {eachPageAmount} = usePagination()
  const {setLoading} = useContext(AuthLoadingContext)
  const [products, setProducts] = useState([])
  const [section, setSection] = useState("sqares");
  const [showDataIndex, setShowDataIndex] = useState(0)

  const dataAmount = useRef(null)
  const history = useHistory();

  useEffect(()=> {
    setLoading(true)
    const fetchAllproducts = async() => {
      const result = await getAllProducts()

      try {
        if(!result.success){
          return history.goBack()
        }
        let getSelectedProducts = result.products
        
        if(selectedCategory !== '全部品項') {
          getSelectedProducts = getSelectedProducts.filter(product => product.category === selectedCategory)
        }

        dataAmount.current = getSelectedProducts.length
        const showDataArr = getSelectedProducts.slice(showDataIndex, showDataIndex+eachPageAmount)
        setLoading(false)
        setProducts(showDataArr)
      } catch(err) {
        return history.goBack()
      }
    }
    fetchAllproducts()
  }, [history, showDataIndex, eachPageAmount,selectedCategory, setLoading])
  

 
  const handletoggleSquares = () => {
    setSection("sqares");
  };

  const handletoggleLists = () => {
    setSection("lists");
  };

  return {
    products,
    setProducts,
    history,
    handletoggleLists,
    handletoggleSquares,
    section,
    setSection,
    showDataIndex,
    setShowDataIndex,
    dataAmount
  }
}

export default useFindProducts