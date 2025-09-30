import "../groupMemberPage/yiming.css";
import myPhoto from "../assets/y.jpg";
import { useNavigate } from "react-router-dom"; // ① 必须从 react-router-dom 引入

export default function Yiming() {
    const navigate = useNavigate(); // ② 必须在组件函数内部调用

    return (
        <div className="yiming-page">
            {/* 返回按钮 */}
            <button
                type="button" // ③ 避免在 form 中触发 submit
                className="back-btn"
                onClick={() => navigate("/")} // 固定跳到首页
            >
                ← Back
            </button>
            {/* 顶部 */}
            <header className="yiming-header">
                <figure className="yiming-photo-wrap">
                    <img
                        src={myPhoto}
                        alt="Yiming portrait"
                        className="yiming-photo"
                    />
                    <figcaption className="yiming-caption">
                        me @MoMA the other day
                        <br />
                        with an awkward smile
                    </figcaption>
                </figure>

                <div className="yiming-intro">
                    <h1 className="yiming-title">Yiming Wei</h1>
                    <h2 className="yiming-subtitle">
                        Financial Engineering · UIBE
                    </h2>
                    <p>
                        Hi! I am Yiming, an exchange student from the
                        <strong>
                            {" "}
                            University of International Business and Economics
                        </strong>{" "}
                        (Beijing), currently a senior majoring in{" "}
                        <strong>Financial Engineering</strong>.
                    </p>
                    <p>
                        This semester I’m at <strong>Baruch College</strong>,
                        New York. First time living in NYC — enjoying the mix of
                        academics, art and culture in such a dynamic city!
                        Loving it so far, and planning to explore more.
                    </p>
                    <p>
                        {" "}
                        I am taking the CIS 4160 class since I really love
                        computer science and I want to study this more "applied"
                        side of tech!{" "}
                    </p>
                </div>
            </header>

            <hr className="divider" />

            {/* 兴趣 */}
            <section className="yiming-section">
                <h3>Fun Facts and Hobbies</h3>
                <p>
                    I love photography and visual arts.
                    <br />I especially enjoy <strong>film photography</strong>,
                    and film digitizing technology.
                    <br />
                    I also love shooting Polaroids and other instant films.
                    <br />I love swimming and hiking.
                </p>
            </section>

            <hr className="divider" />

            {/* 实习经历 */}
            <section className="yiming-section">
                <h3>PROFESSIONAL EXPERIENCE</h3>

                <div className="exp-list">
                    <article className="exp-card">
                        <header className="exp-head">
                            <div className="exp-company">
                                <strong>Mingyi PE (RMB 30B+ AUM)</strong> ·
                                Fixed Income Operations
                            </div>
                            <div className="exp-dates">
                                2025.02.26 – 2025.06.05
                            </div>
                        </header>
                        <ul className="bullet">
                            <li>
                                Automated data & NAV workflows, boosting
                                monitoring efficiency and accuracy; automated
                                extraction of contract data (risk levels,
                                performance, returns) to accelerate amendments.
                            </li>
                            <li>
                                Performed daily/weekly/monthly NAV maintenance
                                and monitoring; ensured contract compliance with
                                new AMAC regulations; liaised with custodians
                                for new product launches.
                            </li>
                        </ul>
                    </article>

                    <article className="exp-card">
                        <header className="exp-head">
                            <div className="exp-company">
                                <strong>China Galaxy Securities</strong> · Fixed
                                Income Department
                            </div>
                            <div className="exp-dates">
                                2024.07.05 – 2024.10.10
                            </div>
                        </header>
                        <ul className="bullet">
                            <li>
                                Engineered a trend-following factor for treasury
                                futures based on high-frequency bid-ask data;
                                validated its effectiveness by replicating
                                classical price trend indicators using
                                volume-based signals and linear regression.
                            </li>
                            <li>
                                Developed grid and Bollinger band strategies for
                                index futures and backtested with Backtrader;
                                supported research on yield curve
                                steepening/flattening during Fed hike/cut
                                cycles.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <hr className="divider" />

            {/* 科研经历 */}
            <section className="yiming-section">
                <h3>RESEARCH EXPERIENCE & WORKING PAPER</h3>

                <div className="exp-list">
                    <article className="exp-card">
                        <header className="exp-head">
                            <div className="exp-company">
                                Asset Pricing via Machine Learning in US and
                                Chinese Stock Markets
                            </div>
                            <div className="exp-dates">
                                Instructor: Prof. Shanglin Lu · 2025.07
                            </div>
                        </header>
                        <ul className="bullet">
                            <li>
                                Extended Gu, Kelly & Xiu (2020, RFS) ML-based
                                stock return forecasting framework by
                                replicating U.S. findings with public data and
                                conducting a parallel empirical analysis in
                                China.
                            </li>
                            <li>
                                Proposed implementation-level optimizations for
                                personal computing environments, especially
                                techniques to improve computational efficiency
                                in large-scale experiments.
                            </li>
                        </ul>
                    </article>

                    <article className="exp-card">
                        <header className="exp-head">
                            <div className="exp-company">
                                The Impact Mechanism of Investor Sentiment on
                                Stock Returns: A Multi-Layer Network Analysis of
                                U.S. Stocks
                            </div>
                            <div className="exp-dates">
                                Instructor: Prof. Xiaowei Huang · 2025.01
                            </div>
                        </header>
                        <ul className="bullet">
                            <li>
                                Utilized StockTwits and Yahoo Finance comments
                                to classify sentiment with pre-trained BERT
                                models, building a dual-layer network of
                                sentiment indices and returns.
                            </li>
                            <li>
                                Conducted variance decomposition and network
                                analysis to reveal sentiment-return
                                relationships and spillover effects among major
                                U.S. firms.
                            </li>
                        </ul>
                    </article>

                    <article className="exp-card">
                        <header className="exp-head">
                            <div className="exp-company">
                                Text Sentiment Analysis Using Various Machine
                                Learning Methods: Performance Comparison in
                                Predicting the Shanghai Stock Index
                            </div>
                            <div className="exp-dates">
                                Instructor: Dr. Yun Chen · 2024.07
                            </div>
                        </header>
                        <ul className="bullet">
                            <li>
                                Fine-tuned and open-sourced the first Chinese
                                stock comment sentiment model (
                                <code>BERT_SCSM</code>) on Hugging Face,
                                benchmarking it against multiple ML/DL models.
                            </li>
                            <li>
                                Demonstrated superior accuracy in sentiment
                                detection; integrated sentiment indicators with
                                price-volume data in an SVR model for index
                                movement prediction.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>

            <footer className="yiming-footer">
                <p>📍 Based in Beijing · Currently in New York City</p>
            </footer>
        </div>
    );
}
