import React from "react";
import "./css/style.css";
import "./css/utilities.css";
import docs from "./images/docs.png";

function Docs() {
  return (
    <div>
      <section class="docs-head bg-primary py-3">
        <div class="container grid">
          <div>
            <h1 class="xl">Docs</h1>
            <p class="lead">Learn how to work with the Loruki platform</p>
          </div>
          <img src={docs} alt="" />
        </div>
      </section>

      <section class="docs-main my-4">
        <div class="container grid">
          <div class="card bg-light p-3">
            <h3 class="my-2">Essentials</h3>
            <nav>
              <ul>
                <li>
                  <a class="text-primary" href="#">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#">About Loruki</a>
                </li>
                <li>
                  <a href="#">Installation</a>
                </li>
              </ul>
            </nav>

            <h3 class="my-2">Deployment</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">Setting up a container</a>
                </li>
                <li>
                  <a href="#">Using the CLI</a>
                </li>
                <li>
                  <a href="#">Managing resources</a>
                </li>
                <li>
                  <a href="#">Upgrade & downgrade</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="card">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio illo facere perferendis laborum? Similique recusandae
              incidunt eos dolorum aliquam ipsam unde perspiciatis laudantium
              totam quam laborum velit, at maxime minus?
            </p>

            <div class="alert alert-success">
              <i class="fas fa-info"></i> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae, animi?
            </div>

            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              totam magni eius vitae velit id, atque veritatis! At, vero porro.
            </p>
            <a href="#" class="btn btn-primary">
              Install CLI
            </a>

            <h3>Requirements</h3>
            <ul>
              <li>Windows 10, Mac OSX, Linux</li>
              <li>Node.js v12 or higher</li>
            </ul>

            <h3>Install</h3>
            <p>Mac (Homebrew)</p>
            <pre>
              <code>$ brew install loruki-cli</code>
            </pre>
            <p>NPM</p>
            <pre>
              <code>$ npm install loruki-cli</code>
            </pre>
            <p>Yarn</p>
            <pre>
              <code>$ yarn install loruki-cli</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Docs;
