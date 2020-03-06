## COVID-19 Epidemic Response Resources (draft)
The Network Systems Science and Advanced Computing (NSSAC) division has been supporting the US federal government through major epidemics since 2005, including planning for the H5N1 outbreak, the 2009 H1N1 pandemic, the MERS outbreak of 2012, the 2014 Ebola outbreak, the 2016 Zika outbreak, and the recent Ebola outbreak in Congo. 

The Novel 2019 Coronavirus (COVID-19) is a rapidly spreading epidemic that was first identified in China but has since spread across the globe. The [CDC says it is likely that COVID-19 will escalate and become a pandemic](https://www.cdc.gov/coronavirus/2019-nCoV/summary.html). Concerted global efforts will be required to mitigate the effects of COVID-19.  While the severity and the extent of the disease cannot yet be predicted with certainty, identification of effective interventions and preventative methods, even at this relatively early stage, will be critical. Non-pharmaceutical measures, such as social distancing, effective isolation, and quarantine, will also be critical in order to control this epidemic.  In addition, the general public needs to [be aware of guidelines they can use to protect themselves](https://mehta-gaurav.github.io/draft/prevention).

![Import Risk: Estimated COVID-19 arrival times based on effective distance to all countries.](https://mehta-gaurav.github.io/draft/Import_Risk_Image2.png)

With respect to COVID-19, we have been working with federal authorities to address questions like the risk of importation of COVID-19 to the US and other countries, location of likely clusters within the US, and estimation of various disease progression parameters. 

Researchers at NSSAC have been analyzing a variety of counterfactual and what-if scenarios and considering the impact of social interventions. We are conducting simulations to forecast disease spread to ascertain the specifics: when, where, and the intensity of the outbreak. Based on these results, we are identifying the most efficient ways to estimate and allocate scarce medical resources. 

To this end, we have developed support tools and dashboards to help healthcare providers and the general public to better evaluate the status of the epidemic. 

![COVID-19 Surveillance Dashboard](https://mehta-gaurav.github.io/draft/Surveillance_Dashboard2.png)

The [COVID-19 Surveillance Dashboard](http://nssac.bii.virginia.edu/covid-19/dashboard/){:target="_blank"} provides a visualization of COVID-19 cases, recoveries, and deaths across the globe. 

![COVID-19 Cases and Clusters Outside of China Dashboard](https://mehta-gaurav.github.io/draft/Cases_And_Clusters2.png)

The [COVID-19 Cases and Clusters Outside of China Dashboard](http://nssac.bii.virginia.edu/covid-19/cluster-dashboard/){:target-"_blank"} allows users to view a detailed breakdown of infected populations outside of China in order to study how infections are distributed based on age, where cases have been imported from, whether the cases are imported or community-spread, and other filterable options.

We have curated data from multiple sources to support these dashboards; these collated datasets can be used to extend global and detailed perspectives of the confirmed cases.

We have also looked at international importation risk based on air travel, estimating the impact of airport suspensions in delaying case emergence; a new dashboard application is under development which will allow users to explore the impact of applying social interventions to air travel. 
![COVID-19 Impact of Air Travel on International Importation](https://mehta-gaurav.github.io/draft/Figure_From_Paper2.png)
 
Moving forward, we are exploring other strategies for understanding and mitigating the spread of COVID-19. We are developing AI-based methods for creating digital twins of cities that can be used with the simulations to study various what-if scenarios. We are continuing to develop easy-to-use decision support tools for planning and response efforts. We are also curating and synthesizing datasets that we can share with the larger academic community for the development of models and additional support tools. Such efforts will help identify data and knowledge gaps, quantify uncertainty, and enhance our level of preparedness based on existing resources. 

### Why use modeling for COVID-19?
During the Ebola crisis in West Africa in 2014, simulations and modeling of disease outbreaks were found to be an integral tool in fighting the epidemic.  Mathematical and computational models allow researchers to explore the scope of an emerging outbreak by forecasting how severe the impact could be if the disease goes unchecked. Models can be designed to overcome limitations caused by sparse information or missing data, and can be adapted as more information is known.  A range of epidemic forecasts, including best- and worst-case scenarios, can be especially useful to policymakers so they can better gauge how to budget and distribute limited resources.  Additionally, analyzing results of multiple models, and assessing the differences between them, can lead to a better understanding of the disease parameters and guide revisions that lead to better forecasts.  Modeling can also help epidemiologists study the effectiveness of different interventions, quickly and cheaply evaluating which interventions (and combinations of interventions) are likely to be most effective in resolving the outbreak and reducing disease spread.

Although modeling can be useful for predicting how severe an epidemic may be and the strategies to combat it, simulations can also be useful for understanding why a disease has emerged where it has, and why at this time.  Model-based risk assessment of emerging diseases can help determine which outbreaks are likely to become epidemics, even in the absence of prior related outbreaks.  This deductive reasoning approach can be used in coordination with inductive reasoning often employed by epidemiologists; as the disease progresses, forecasted data can be compared to the observed data, and the models can be revised accordingly; this kind of coordinated cross-analysis can help resolve uncertainties in the disease progression.

Models can also capitalize on data from diverse sources, such as cultural mores, social networks, transportation, weather, and the interface between the human and animal worlds.  Taken individually, these data elements may not appear to have a strong correlation with the disease outbreak, but pulled together, these various data elements may draw a picture that provides a better understanding of why here and why now.  Understanding how humans connect and interact with the world around them can help overcome deficiencies in information known about the disease itself.

In the case of COVID-19, there are certain features of coronaviruses in general that can be considered when forecasting future spread.  However, there was some delay between the emergence of the disease and the announcement to the epidemiological community.  This has been complicated by language barriers as well as political obstacles.  The available data is simultaneously sparse but vast; although we didn’t have detailed information at first, now we have much more information from China and the other affected countries, as well as data from cruise ships, quarantine areas, and more.  Limitations in screening techniques have caused people to be misdiagnosed.  Also, fears of being quarantined have led some people to take steps to hide their illness from screeners, so prevalence is likely to be much higher than reported.  All of these factors make it hard to assess the epidemic by traditional means, but modeling and simulation can help overcome these limitations and better inform policymakers and health workers who have to address this crisis.

For more on why modeling is a useful tool for epidemic research, [see this article](https://www.pnas.org/content/111/51/18095).


