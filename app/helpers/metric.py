# Copyright 2021 Clivern
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import newrelic.agent

from app.shortcuts import Logger
from app.shortcuts import get_config


def record_metric(metric, count):
    """
    Report a Custom Metric to New Relic

    Args:
        metric: the metric name
        count: The value
    """
    logger = Logger().get_logger(__name__)

    # Skip Reporting
    if "NEW_RELIC_STATUS" not in os.environ.keys() or os.environ["NEW_RELIC_STATUS"] == "disabled":
        logger.warning("Skip metric {} reporting: newrelic.ini is missing".format(metric))
        return

    # Report the metric
    metric = "{}/{}".format(get_config("app_name", "Bulldog"), metric)
    logger.info("Push metric with key {} and value {}".format(metric, str(count)))

    newrelic.agent.record_custom_metric(metric, count, newrelic.agent.application())
