import Link from "next/link";

export default function ListGames({games}) {
/*   if (!games) return (
    <p>cargando...</p>
  ); */
  return (
    <>
      {/* <div className="container">
        <div className="row">
          {games.map(game => (
            <div className="col-md-4" key={game.id}>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={game.image} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">{game.name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link href="/[id]" as={`/${game.id}`}>
                        <a className="btn btn-sm btn-outline-secondary">Ver</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div>
        <div>
          {games.map(game => (
            //<CardGame key={game.id} game={game} />
            <div key={game.id}>
              <div >
                <img src={game.thumbnail} alt="Card image cap" />
                <div >
                  <p >{game.title}</p>
                  <div >
                    <div >
                      <Link href="/[id]" as={`/${game.id}`}>
                        <a>Ver</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}