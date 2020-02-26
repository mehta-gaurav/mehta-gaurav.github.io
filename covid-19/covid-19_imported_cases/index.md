## [COVID-19 Imported Cases Dashboard](https://datastudio.google.com/u/0/reporting/f6ad0988-f203-45f8-8d18-5d726c1d2d8b/page/MGzDB) 

##### 02/11/2020

In an effort to support the planning and response efforts for the recent Coronavirus outbreak,
the [Network Systems Science and Advanced Computing (NSSAC)](https://biocomplexity.virginia.edu/nssac)
division of the [Biocomplexity Institute and Initiative](https://biocomplexity.virginia.edu/) 
at the [University of Virginia](https://www.virginia.edu/) has prepared a visualization tool that takes NSSAC-curated data from the [Harvard public line list](https://docs.google.com/spreadsheets/d/1itaohdPiAeniCXNlntNztZ_oRvjh0HsGuJXUJWET008/edit#gid=0) in order to display a dashboard view of imported COVID-19 cases (cases in countries outside of China).  Users can click on countries on the dashboard's interactive map to see:
- the number of recorded cases;
- the number known to have been imported from other countries;
- the number of symptomatic cases (and, where available, what symptoms where exhibited);
- the number of countries (this will be 1, unless the page is refreshed to the global setting);
- where the imported cases are suspected to be from (ie, due to recent travel);
- the ages of the infected people.

In addition to the dashboard view, the [COVID-19 Imported Cases Dashboard](https://datastudio.google.com/u/0/reporting/f6ad0988-f203-45f8-8d18-5d726c1d2d8b/page/MGzDB) includes Imported Case Cluster Figures (where applicable) generated from the [BeOutbreakPrepared nCoV 2019 public line list](https://github.com/beoutbreakprepared/nCoV2019).  Features of each figure type are described below:

Overview
- The time within the outbreak is rendered as the x-axis.
- Cases are rendered along the y-axis and labelled with their geographic location.
- Each figure shows the imported COVID-19 cases for a given non-China country sorted by first cluster_ID, then case ID.
- Arrows for each case signify the flow of time between the first and last recorded event for a given case.

Cluster Assignment & Visualization
- cluster_ID is assigned via a combination of manual curation and inference where the cluster is named after the ID of the index case.
- cluster_IDs are manually curated by volunteers via a review of press articles regarding the case origin, seeking evidence of autochthonous transmission.
- For cases where no travel is recorded, cluster_ID is assigned as the ID of the first individual at their given named location who travelled to China and was infected.
- cluster_IDs are represented by both a row color assignment (yellow for earlier clusters) and a right axes label constructed as such:
'{ID} {"Inf" if inferred} - Cl {cluster_ID}'
- Imported cases which appear to have originated in China and which are not the index case of an autochthonous cluster are rendered with an uncolored background and a right axes label constructed as such:
'{ID} Imp' (for imported)
- Cases which do not appear to have originated in China and which do not appear connected to any cluster by inference or curation are rendered with an uncolored background and a right axes label constructed as such:
'{ID} Unk' (for unknown)
- Inferred clusters' row backgrounds are rendered with lower saturation than manually curated clusters to convey a reduced confidence level.

Case History Events and Ranges
- Within this data set, temporal data is divided between singular events and ranges which occur between specific events.
- Events include date_travel, date_onset_symptoms, date_admission_hospital, date_death, date_discharge, date_confirmation, and date_missing if no valid date data is present.
- Ranges include time spans between all temporally proximal events, excluding date_confirmation.
- Ranges are determined by event occurrence and presence in the source data set and are not uniformly present or ordered across cases.
- Events are rendered as unfilled, rectangular glyphs over a singular day in a darkened shade of the event color.
- For days with multiple events, the traditionally later event is rendered as an expanded rectangle over the traditionally earlier.
- Ranges are rendered as filled rectangular spans between two events on the x axis.
- For events with multiple dates, the first date is taken.
- For cases with no date data, the date_missing date is assigned to one day prior to the first event in the data set.
- date_death and date_discharge are calculated from the date_death_or_discharge and outcome fields of the original data.
- Dates which are misformatted, occur in the future, are more than 30 days apart from their expected preceding event, or are before December 15th are set to NaT.
 
The current version of the tool is a beta release; we will be providing updates to the tool, as well as to the datasets. 
Please report any suggestions, bug reports, or additional data sources you think we should consider 
by contacting covid-2019_imported_cases@virginia.edu.

Supported Browsers: Firefox, Google Chrome, Internet Explorer, Safari, iPad, and mobile.


