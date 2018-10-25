import React, { Fragment } from 'react';

export default function NewspaperArticle() {
	return (
		<Fragment>
			<header className="newspaper__header">
				<div className="content-container">
					<div className="newspaper__title">The Daily Almond</div>
				</div>
			</header>

			<main className="newspaper__content">
				<div className="content-container">
					<div className="newspaper__columns">
						<article>
							<p className="newspaper__paragraph">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Accusamus inventore, aliquam incidunt mollitia nihil, fugiat
								sint dicta totam nam provident esse reiciendis illum ducimus
								tempore vitae dolorum veritatis dolorem hic. Lorem ipsum dolor
								sit, amet consectetur adipisicing elit. Accusamus inventore,
								aliquam incidunt mollitia nihil, fugiat sint dicta totam nam
								provident esse reiciendis illum ducimus tempore vitae dolorum
								veritatis dolorem hic. Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Accusamus inventore, aliquam incidunt mollitia
								nihil, fugiat sint dicta totam nam provident esse reiciendis
								illum ducimus tempore vitae dolorum veritatis dolorem hic.
							</p>
							<p className="newspaper__paragraph">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Accusamus inventore, aliquam incidunt mollitia nihil, fugiat
								sint dicta totam nam provident esse reiciendis illum ducimus
								tempore vitae dolorum veritatis dolorem hic.
							</p>
							<p className="newspaper__paragraph">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Accusamus inventore, aliquam incidunt mollitia nihil, fugiat
								sint dicta totam nam provident esse reiciendis illum ducimus
								tempore vitae dolorum veritatis dolorem hic. Lorem ipsum dolor
								sit, amet consectetur adipisicing elit. Accusamus inventore,
								aliquam incidunt mollitia nihil, fugiat sint dicta totam nam
								provident esse reiciendis illum ducimus tempore vitae dolorum
								veritatis dolorem hic. Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Accusamus inventore, aliquam incidunt mollitia
								nihil, fugiat sint dicta totam nam provident esse reiciendis
								illum ducimus tempore vitae dolorum veritatis dolorem hic. Lorem
								ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
								inventore, aliquam incidunt mollitia nihil, fugiat sint dicta
								totam nam provident esse reiciendis illum ducimus tempore vitae
								dolorum veritatis dolorem hic. Lorem ipsum dolor sit, amet
								consectetur adipisicing elit. Accusamus inventore, aliquam
								incidunt mollitia nihil, fugiat sint dicta totam nam provident
								esse reiciendis illum ducimus tempore vitae dolorum veritatis
								dolorem hic.
							</p>
						</article>
					</div>
				</div>
			</main>

			<footer className="newspaper__footer">
				<div className="content-container">Footer</div>
			</footer>
		</Fragment>
	);
}
