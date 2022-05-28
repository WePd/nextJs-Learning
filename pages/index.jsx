// 简单来说这就是一个react组件，之后到导出就可以

import Link from "next/link"
const Home = () => {
  return (
    <div>
      <h3>Home Page</h3>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/product/[name]">1</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
