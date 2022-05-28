//动态路由页面    localhost:8000/ptoduct/1 就会显示这个页面

import { useRouter } from "next/router"

export default function ProductList() {
  const { pathname, query } = useRouter()
  console.log(query)
  return (
    <div>
      <h3>动态页面prop</h3>
      <h3>{pathname}</h3>
      <h3>
        {`上一级query是${query.list}`} {query.prop}
      </h3>
    </div>
  )
}
