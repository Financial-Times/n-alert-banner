export const main = `

<div class="n-alert-banner" data-n-component="n-alert-banner">
	<div class="n-alert-banner__inner" data-n-alert-banner-inner="">
		<div class="n-alert-banner__content n-alert-banner__content--long">
			long content
		</div>
		<div class="n-alert-banner__content n-alert-banner__content--short">
			short content
		</div>
		<div class="n-alert-banner__actions">
			<div class="n-alert-banner__action">
				<a href="#" class="n-alert-banner__button">button label</a>
			</div>
			<div class="n-alert-banner__action n-alert-banner__action--secondary">
				<a href="#" class="n-alert-banner__link">link label</a>
			</div>
		</div>
	</div>
</div>

`;

export const attachToNavMain = `
<div class="n-alert-banner" data-n-component="n-alert-banner" data-n-alert-banner-append-to-element="#site-navigation">
	<div class="n-alert-banner__inner" data-n-alert-banner-inner="" data-n-alert-banner-close-button="false">
		<div class="n-alert-banner__content n-alert-banner__content--long">
			long content
		</div>
		<div class="n-alert-banner__content n-alert-banner__content--short">
			short content
		</div>
		<div class="n-alert-banner__actions">
			<div class="n-alert-banner__action">
				<a href="#" class="n-alert-banner__button">button label</a>
			</div>
			<div class="n-alert-banner__action n-alert-banner__action--secondary">
				<a href="#" class="n-alert-banner__link">link label</a>
			</div>
		</div>
	</div>
</div>

`;

export const navParentElementOfAlertBanner = `

<div id="site-navigation">
	<div class="n-alert-banner" data-n-component="n-alert-banner" data-n-alert-banner-append-to-element="#site-navigation">
		<div class="n-alert-banner__inner" data-n-alert-banner-inner="" data-n-alert-banner-close-button="false">
			<div class="n-alert-banner__content n-alert-banner__content--long">
				long content
			</div>
			<div class="n-alert-banner__content n-alert-banner__content--short">
				short content
			</div>
			<div class="n-alert-banner__actions">
				<div class="n-alert-banner__action">
					<a href="#" class="n-alert-banner__button">button label</a>
				</div>
				<div class="n-alert-banner__action n-alert-banner__action--secondary">
					<a href="#" class="n-alert-banner__link">link label</a>
				</div>
			</div>
		</div>
	</div>
</div>

`;

export const mainWithCloseButton = `

<div class="n-alert-banner" data-n-component="n-alert-banner">
	<div class="n-alert-banner__inner" data-n-alert-banner-inner="">
		<div class="n-alert-banner__content n-alert-banner__content--long">
			long content
		</div>
		<div class="n-alert-banner__content n-alert-banner__content--short">
			short content
		</div>
		<div class="n-alert-banner__actions" >
			<div class="n-alert-banner__action">
				<a href="#" class="n-alert-banner__button">button label</a>
			</div>
			<div class="n-alert-banner__action n-alert-banner__action--secondary">
				<a href="#" class="n-alert-banner__link">link label</a>
			</div>
		</div>
		<a class="n-alert-banner__close" role="button" href="#void" aria-label="Close" title="Close"></a>
	</div>
</div>

`;

export const mainNoCloseButton = `

<div class="n-alert-banner" data-n-component="n-alert-banner">
	<div class="n-alert-banner__inner" data-n-alert-banner-inner="" data-n-alert-banner-close-button="false">
		<div class="n-alert-banner__content n-alert-banner__content--long">
			long content
		</div>
		<div class="n-alert-banner__content n-alert-banner__content--short">
			short content
		</div>
		<div class="n-alert-banner__actions">
			<div class="n-alert-banner__action">
				<a href="#" class="n-alert-banner__button">button label</a>
			</div>
			<div class="n-alert-banner__action n-alert-banner__action--secondary">
				<a href="#" class="n-alert-banner__link">link label</a>
			</div>
		</div>

	</div>
</div>
`;


export const mockMain = `
	<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
		<div class="mockOuterClass">
			<div class="mockInnerClass" data-n-alert-banner-inner="">
				<div class="mockContentClass mockContentLongClass">
					<p><b>mockContentLongBold</b> mockContentLong</p>
				</div>
				<div class="mockContentClass mockContentShortClass">
					<p>mockContentShort</p>
				</div>
				<div class="mockActionsClass">
					<div class="mockActionClass">
						<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
					</div>
					<div class="mockActionClass mockActionSecondaryClass">
						<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

export const noContentShort = `
<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
	<div class="mockOuterClass">
		<div class="mockInnerClass" data-n-alert-banner-inner="">
			<div class="mockContentClass mockContentLongClass">
				<p><b>mockContentLongBold</b> mockContentLong</p>
			</div>
			<div class="mockActionsClass">
				<div class="mockActionClass">
					<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
				</div>
				<div class="mockActionClass mockActionSecondaryClass">
					<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
				</div>
			</div>
		</div>
	</div>
</div>
`;

export const noLink = `
<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
	<div class="mockOuterClass">
		<div class="mockInnerClass" data-n-alert-banner-inner="">
			<div class="mockContentClass mockContentLongClass">
				<p><b>mockContentLongBold</b> mockContentLong</p>
			</div>
			<div class="mockContentClass mockContentShortClass">
				<p>mockContentShort</p>
			</div>
			<div class="mockActionsClass">
				<div class="mockActionClass">
					<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
				</div>
			</div>
		</div>
	</div>
</div>
`;

export const noButtonLazyLoad = `
<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
	<div class="mockOuterClass">
		<div class="mockInnerClass" data-n-alert-banner-inner="">
			<div class="mockContentClass mockContentLongClass">
				<p><b>mockContentLongBold</b> mockContentLong</p>
			</div>
			<div class="mockContentClass mockContentShortClass">
				<p>mockContentShort</p>
			</div>
			<div class="mockActionsClass">
				<div class="mockActionClass mockActionSecondaryClass">
					<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
				</div>
			</div>
		</div>
	</div>
</div>
`;


export const mockTheme = `
<div class="mockAlertClass mockAlertClass--mock-theme" data-n-component="n-alert-banner">
	<div class="mockOuterClass">
		<div class="mockInnerClass" data-n-alert-banner-inner="">
			<div class="mockContentClass mockContentLongClass">
				<p><b>mockContentLongBold</b> mockContentLong</p>
			</div>
			<div class="mockContentClass mockContentShortClass">
				<p>mockContentShort</p>
			</div>
			<div class="mockActionsClass">
				<div class="mockActionClass">
					<a href="mockButtonUrl" class="mockButtonClass">mockButtonLabel</a>
				</div>
				<div class="mockActionClass mockActionSecondaryClass">
					<a href="mockLinkUrl" class="mockLinkClass">mockLinkLabel</a>
				</div>
			</div>
		</div>
	</div>
</div>
`;

export const siteNavigation = '<div id="site-navigation"></div>';

export const closeButtonElement = '<a class="n-alert-banner__close" role="button" href="#void" aria-label="Close" title="Close"></a>';

export const mockCloseButtonElement = '<a class="mockCloseButtonClass" role="button" href="#void" aria-label="mockCloseButtonLabel" title="mockCloseButtonLabel"></a>';
