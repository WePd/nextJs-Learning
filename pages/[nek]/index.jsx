//动态路由页面    localhost:8000/ptoduct/1 就会显示这个页面

import { useRouter } from "next/router"

export default function ProductList() {
  const { pathname, query } = useRouter()
  return (
    <div>
      <h3>动态文件下的默认</h3>
      <h3>{pathname}</h3>
      <h3>{query.nek}</h3>
    </div>
  )
}
