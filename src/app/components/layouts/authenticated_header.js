import Link from 'next/link'

export default function AuthenticatedHeader() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/create"> <i class="ion-compose"></i>&nbsp;New Article </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" href="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" href="/profile/eric-simons">
              <img src="" className="user-pic" />
              Eric Simons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}