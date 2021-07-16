import { useEffect, useState } from "react";
import "./Match.css";
import Loading from "./Loading";

export default function Match(props) {
  const [match, setMatch] = useState({
    loading: false,
    metadata: null,
    info: null,
  });

  useEffect(() => {
    let isMounted = true;
    setMatch({
      loading: true,
    });

    fetch(`/api/match/${props.id}`, { method: "GET" })
      .then((res) => res.json())
      .then(({ metadata, info }) => {
        if (isMounted) {
          setMatch({
            loading: false,
            metadata,
            info,
          });
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isMounted = false;
    };
  }, [props.id]);

  const { loading, metadata, info } = match;

  return <div key={props.id}>{loading ? <Loading /> : <>{info.gameId}</>}</div>;
}
