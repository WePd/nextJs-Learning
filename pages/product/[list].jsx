//动态路由页面    localhost:8000/ptoduct/1 就会显示这个页面

import { useRouter } from "next/router"

export default function ProductList() {
  const { pathname, query } = useRouter()
  return (
    <div>
      <h3>动态页面</h3>
      <h3>{pathname}</h3>
      <h3>{query.list}</h3>
    </div>
  )
}
