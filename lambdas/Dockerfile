FROM public.ecr.aws/lambda/python:latest
RUN pip install redis
WORKDIR ${LAMBDA_TASK_ROOT}
COPY . .
CMD [ "pyredis.main" ]