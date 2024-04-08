import Link from 'next/link'

export default function AuthenticatedHeader() {
  return (
    <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" href="/">conduit</Link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <Link class="nav-link active" href="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/editor"> <i class="ion-compose"></i>&nbsp;New Article </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/profile/eric-simons">
              <img src="" class="user-pic" />
              Eric Simons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}