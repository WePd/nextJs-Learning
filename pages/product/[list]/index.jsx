//动态路由页面    localhost:8000/ptoduct/1 就会显示这个页面

import { useRouter } from "next/router"
import Link from "next/dist/client/link"

export default function ProductList() {
  const listData = [
    { id: "item1", name: "项目一" },
    { id: "item2", name: "项目二" },
  ]
  const { pathname, query } = useRouter()
  return (
    <div>
      <span>{query.list}</span>
      <ul>
        {listData.map((item) => (
          <li key={item.id}>
            {/* <Link href={`/product/${query.list}/${item.id}`}>{item.name}</Link> */}
            {/* 另一种写法  对象的方式*/}
            <Link
              href={{
                pathname: `/product/${query.list}`,
                query: { list: item.id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
