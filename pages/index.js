import Head from "next/head";
import Image from "next/image";
import Links from "../components/Links";

export default function Home() {
  return (
    <div
      style={{
        background:
          "url(https://images.unsplash.com/photo-1517707711963-adf9078bdf01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
      }}
      className="flex flex-col !bg-cover items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center mt-5">
        <Image
          width={200}
          height={200}
          className="mx-auto rounded-full"
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625825953/Avneesh_Avatar_gukdsk.png"
          alt="Avneesh Agarwal"
        />
        <h2 className="my-3 text-3xl font-bold text-center text-indigo-900 md:text-4xl">
          Avneesh Agarwal
        </h2>
      </div>

      <Links
        image="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        link="https://www.instagram.com/avneesh.codes/"
        text="Follow me on Instagram"
      />
      <Links
        image="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
        link="https://avneesh0612.hashnode.dev/"
        text="Checkout my blogs on Hashnode"
      />
      <Links
        image="https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png"
        link="https://discord.gg/e3sDQjSnDK"
        text="Join my Discord server"
      />
      <Links
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
        link="https://github.com/avneesh0612"
        text="Look at my code on Github"
      />
      <Links
        image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        link="https://twitter.com/AvneeshAgarwa12"
        text="Follow me on Twitter"
      />
      <Links
        image="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
        link="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
        text="Connect with me on LinkedIn"
      />
      <Links
        image="https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png"
        link="https://avneeshresume.netlify.app/"
        text="Checkout my resume"
      />
    </div>
  );
}
