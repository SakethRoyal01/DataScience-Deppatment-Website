// // import DriftWall from './DriftWall';

// // const items = [
// //   { image: 'https://picsum.photos/id/1015/600/400', title: 'Peaks', href: 'https://example.com/one' },
// //   { image: 'https://picsum.photos/id/1025/600/400', title: 'Pup', href: 'https://example.com/two' },
// //   { image: 'https://picsum.photos/id/1039/600/400', title: 'Falls', href: 'https://example.com/three' },
// // ];

// // <div style={{ height: 600 }}>
// //   <DriftWall
// //     items={items}
// //     columns={5}
// //     tileWidth={200}
// //     tileHeight={132}
// //     gap={18}
// //     tilt={16}
// //     turn={-14}
// //     perspective={1200}
// //     depth={120}
// //     speed={42}
// //     direction="up"
// //     variance={0.45}
// //     parallax={0.6}
// //     lift={64}
// //     fade={0.6}
// //     dim={0.55}
// //     overlayColor="#060010"
// //     radius={14}
// //     roll={0}
// //     pauseOnHover={false}
// //     grayscale={false}
// // />
// // </div>

// import DriftWall from "./DriftWall";

// const items = [
//   {
//     image: "https://picsum.photos/id/1015/600/400",
//     title: "Peaks",
//   },
//   {
//     image: "https://picsum.photos/id/1025/600/400",
//     title: "Pup",
//   },
//   {
//     image: "https://picsum.photos/id/1039/600/400",
//     title: "Falls",
//   },
//   {
//     image: "https://picsum.photos/id/1043/600/400",
//     title: "Nature",
//   },
//   {
//     image: "https://picsum.photos/id/1044/600/400",
//     title: "Landscape",
//   },
//   {
//     image: "https://picsum.photos/id/1050/600/400",
//     title: "Mountain",
//   },
//   {
//     image: "https://picsum.photos/id/1062/600/400",
//     title: "Road",
//   },
//   {
//     image: "https://picsum.photos/id/1069/600/400",
//     title: "Forest",
//   },
//   {
//     image: "https://picsum.photos/id/1074/600/400",
//     title: "Lake",
//   },
//   {
//     image: "https://picsum.photos/id/1080/600/400",
//     title: "Water",
//   },
// ];

// export const Gallery = () => {
//   return (
//     <section
//       id="gallery"
//       className="relative w-full overflow-hidden bg-black"
//     >
//       <div className="mx-auto max-w-7xl px-6 pt-20">
//         <div className="mb-8 text-center">
//           <h2 className="text-4xl font-bold text-white md:text-5xl">
//             Gallery
//           </h2>

//           <p className="mt-3 text-white/60">
//             Moments and memories
//           </p>
//         </div>

//         <div className="h-[600px] w-full">
//           <DriftWall
//             items={items}
//             columns={5}
//             tileWidth={200}
//             tileHeight={132}
//             gap={18}
//             tilt={16}
//             turn={-14}
//             perspective={1200}
//             depth={120}
//             speed={42}
//             direction="up"
//             variance={0.45}
//             parallax={0.6}
//             lift={64}
//             fade={0.6}
//             dim={0.55}
//             overlayColor="#060010"
//             radius={14}
//             roll={0}
//             pauseOnHover={false}
//             grayscale={false}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };




// import DriftWall from "./DriftWall";

// const items = [
//   {
//     image: "https://picsum.photos/id/1015/600/400",
//     title: "Peaks",
//   },
//   {
//     image: "https://picsum.photos/id/1025/600/400",
//     title: "Pup",
//   },
//   {
//     image: "https://picsum.photos/id/1039/600/400",
//     title: "Falls",
//   },
//   {
//     image: "https://picsum.photos/id/1043/600/400",
//     title: "Nature",
//   },
//   {
//     image: "https://picsum.photos/id/1044/600/400",
//     title: "Landscape",
//   },
//   {
//     image: "https://picsum.photos/id/1050/600/400",
//     title: "Mountain",
//   },
//   {
//     image: "https://picsum.photos/id/1062/600/400",
//     title: "Road",
//   },
//   {
//     image: "https://picsum.photos/id/1069/600/400",
//     title: "Forest",
//   },
//   {
//     image: "https://picsum.photos/id/1074/600/400",
//     title: "Lake",
//   },
//   {
//     image: "https://picsum.photos/id/1080/600/400",
//     title: "Water",
//   },
// ];

// export const Gallery = () => {
//   return (
//     <section
//       id="gallery"
//       className="relative w-full overflow-hidden bg-[#F7FBFF]"
//     >
//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <div className="mx-auto w-full px-6 pt-24">
//         <div className="mb-10 text-center">
//           <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#7DA0CA]">
//             Department Moments
//           </p>

//           <h2 className="text-5xl font-bold tracking-[-0.05em] text-[#021024] md:text-6xl">
//             Gallery
//           </h2>

//           <p className="mt-4 text-sm text-[#021024]/50 md:text-base">
//             Moments and memories from our department.
//           </p>
//         </div>

//         {/* =====================================================
//             DRIFTING GALLERY
//         ===================================================== */}

//         <div className="h-[650px] w-full">
//           <DriftWall
//             items={items}

//             /* Wider gallery */
//             columns={5}
//             tileWidth={300}
//             tileHeight={185}
//             gap={20}

//             /* Softer, cleaner perspective */
//             tilt={5}
//             turn={-4}
//             perspective={1500}
//             depth={20}

//             /* Smooth movement */
//             speed={34}
//             direction="up"
//             variance={0.18}
//             parallax={0.28}

//             /* Hover */
//             lift={32}

//             /* Bright images */
//             fade={0.18}
//             dim={0.96}
//             grayscale={false}

//             /* Website colours */
//             overlayColor="#021024"

//             radius={22}
//             roll={0}

//             pauseOnHover={false}
//           />
//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM SPACE
//       ===================================================== */}

//       <div className="h-20" />
//     </section>
//   );
// };

// export default Gallery;





import DriftWall from "./DriftWall";

const items = [
  {
    image: "https://picsum.photos/id/1015/600/400",
    title: "Peaks",
  },
  {
    image: "https://picsum.photos/id/1025/600/400",
    title: "Pup",
  },
  {
    image: "https://picsum.photos/id/1039/600/400",
    title: "Falls",
  },
  {
    image: "https://picsum.photos/id/1043/600/400",
    title: "Nature",
  },
  {
    image: "https://picsum.photos/id/1044/600/400",
    title: "Landscape",
  },
  {
    image: "https://picsum.photos/id/1050/600/400",
    title: "Mountain",
  },
  {
    image: "https://picsum.photos/id/1062/600/400",
    title: "Road",
  },
  {
    image: "https://picsum.photos/id/1069/600/400",
    title: "Forest",
  },
  {
    image: "https://picsum.photos/id/1074/600/400",
    title: "Lake",
  },
  {
    image: "https://picsum.photos/id/1080/600/400",
    title: "Water",
  },
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-[#F4F9FD]"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      {/* Large soft blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-[850px]
          w-[1400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C1E8FF]/45
          blur-[150px]
        "
      />

      {/* Subtle navy glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[40%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#7DA0CA]/10
          blur-[110px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(rgba(2,16,36,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(2,16,36,0.055)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full px-5 pt-28 md:px-8 lg:px-10">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-7xl">

          <div className="flex items-end justify-between gap-8">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#7DA0CA]" />

                <span
                  className="
                    text-[0.65rem]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#52739C]
                  "
                >
                  Department Moments
                </span>
              </div>

              <h2
                className="
                  text-5xl
                  font-bold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#021024]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Gallery
              </h2>

            </div>

            {/* Small decorative index */}
            <div
              className="
                hidden
                items-center
                gap-3
                pb-2
                md:flex
              "
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-[#021024]/30">
                01
              </span>

              <span className="h-px w-16 bg-[#021024]/15" />

              <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-[#021024]/30">
                MOMENTS
              </span>
            </div>

          </div>
        </div>

        {/* =====================================================
            GALLERY FRAME
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1700px]
            overflow-hidden
            rounded-[34px]
            border
            border-[#7DA0CA]/20
            bg-[#EAF5FC]/65
            shadow-[0_30px_100px_rgba(2,16,36,0.08)]
          "
        >

          {/* Top accent */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              z-20
              h-px
              w-[35%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#7DA0CA]/70
              to-transparent
            "
          />

          {/* Inner glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[600px]
              w-[1000px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C1E8FF]/25
              blur-[120px]
            "
          />

          {/* Gallery */}
          <div className="relative z-10 h-[650px] w-full">

            <DriftWall
              items={items}

              columns={5}

              tileWidth={300}
              tileHeight={185}
              gap={22}

              tilt={4}
              turn={-3}

              perspective={1500}
              depth={15}

              speed={34}
              direction="up"

              variance={0.16}
              parallax={0.22}

              lift={30}

              fade={0.15}
              dim={0.96}

              grayscale={false}

              overlayColor="#021024"

              radius={22}
              roll={0}

              pauseOnHover={false}
            />
          </div>

          {/* Bottom frame line */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-5
              left-1/2
              z-20
              h-px
              w-[90%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#7DA0CA]/20
              to-transparent
            "
          />
        </div>

        {/* Bottom spacing */}
        <div className="h-28" />
      </div>
    </section>
  );
};

export default Gallery;