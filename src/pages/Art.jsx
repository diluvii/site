import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./page_styles.scss";

const asset = (path) =>
    `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, "/");

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

function Art(props) {
    const dummyArtposts = [
        //{ title: "placeholder", desc: "placeholder", img: asset("art/hanged-man.jpg") },
        { title: "placeholder", desc: "placeholder", img: asset("art/armand.webm") },
        { title: "placeholder", desc: "placeholder", img: asset("art/eboshi.webp") },
        { title: "placeholder", desc: "placeholder", img: asset("art/giordano.jpg") },
        //{ title: "placeholder", desc: "placeholder", img: asset("art/collage.jpg") },
        { title: "placeholder", desc: "placeholder", img: asset("art/anim-1.webm") },
        { title: "placeholder", desc: "placeholder", img: asset("art/sart.webm") },
        //{ title: "placeholder", desc: "placeholder", img: asset("art/boat.jpg") },
    ];

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [containerWidth, setContainerWidth] = useState(700);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const isImage = (img) =>
        /\.(webp|png|jpe?g)$/i.test(img);

    return (
        <div className="page">
            <h2>art &gt;&gt;</h2>

        <div className="slides-container">
            <Document
                file={asset("art/portfolio.pdf")}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<p>Loading portfolio...</p>}
                error={<p>Could not load portfolio PDF.</p>}
            >
                <div className="carousel-page">
                    <Page
                        pageNumber={pageNumber}
                        width={containerWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />

                    <button
                        className="carousel-arrow prev"
                        onClick={() =>
                            setPageNumber((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={pageNumber <= 1}
                        aria-label="Previous page"
                    >
                        &lt;
                    </button>

                    <button
                        className="carousel-arrow next"
                        onClick={() =>
                            setPageNumber((prev) =>
                                Math.min(prev + 1, numPages)
                            )
                        }
                        disabled={!numPages || pageNumber >= numPages}
                        aria-label="Next page"
                    >
                        &gt;
                    </button>
                </div>
            </Document>

            <span className="carousel-counter">
                {pageNumber} / {numPages || "—"}
            </span>
        </div>

            <p className="center">𓆝 𓆟 𓆞</p>

            <div className="post-area art">
                {dummyArtposts.map((item, i) => (
                    <div className="post art" key={i}>
                        {isImage(item.img) ? (
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        ) : (
                            <video
                                src={item.img}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Art;