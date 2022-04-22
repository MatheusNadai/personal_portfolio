import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./styles";

export default function Introduction(): JSX.Element {
  return (
    <Container>
      <span>
        Olá, eu sou o <b>Matheus de Nadai</b> 🤯
      </span>
      <p className="role">FullStack Web Developer & Mobile Developer</p>
      <p className="description">
        Eu projeto e codifico sonhos, transformando-os em realidade,
        simplesmente amo o que faço
      </p>
      <Image src="/profile.svg" alt="Vercel Logo" width={230} height={230} />
      <div className="awards">
        <div className="information">
          <p>5+</p>
        </div>
        <div className="information">
          <p>100+</p>
        </div>
        <div className="information">
          <p>50+</p>
        </div>
      </div>
    </Container>
  );
}
