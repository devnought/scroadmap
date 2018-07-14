FROM scratch
COPY target/x86_64-unknown-linux-musl/release/scroadmap /
EXPOSE 8000
WORKDIR /
CMD [ "./scroadmap" ]
